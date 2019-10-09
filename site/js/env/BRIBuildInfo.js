'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-09 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-488';
    this._commitGIT = 'f69de98f451932954fd609061195c99253554e7b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}