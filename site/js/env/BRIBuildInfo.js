'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-20 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-289';
    this._commitGIT = '644a9f8371df9fe262abc05996b2aebfab818262';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}