'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-27 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-315';
    this._commitGIT = '1d422c819a13ae121e4bbb6da9a86baed6ed7d0a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}