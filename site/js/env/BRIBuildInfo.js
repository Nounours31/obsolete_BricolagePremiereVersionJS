'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-17 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-2109';
    this._commitGIT = 'e7868a010b5d4a2aa97e9fc712b2b882ba1df184';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}