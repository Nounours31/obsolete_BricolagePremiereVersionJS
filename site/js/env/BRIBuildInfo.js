'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-27 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1414';
    this._commitGIT = '2fe2fe7b72deaa269cd083ee75326f0dacda2210';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}