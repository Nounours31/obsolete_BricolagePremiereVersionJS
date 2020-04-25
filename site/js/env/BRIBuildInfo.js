'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-25 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-1286';
    this._commitGIT = '35cf4382a5a586b54687018e21352eb70050896d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}