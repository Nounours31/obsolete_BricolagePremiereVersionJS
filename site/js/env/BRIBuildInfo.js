'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-18 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-649';
    this._commitGIT = 'cae7aacec6a59c139201328690518029406ada19';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}