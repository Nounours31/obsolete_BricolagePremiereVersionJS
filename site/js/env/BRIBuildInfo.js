'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-07 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-1212';
    this._commitGIT = 'b06d79be8a3834badad4692c44f6d615faeaf559';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}