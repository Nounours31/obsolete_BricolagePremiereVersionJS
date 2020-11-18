'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-18 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-2113';
    this._commitGIT = 'a12c438f9f695ba2e6cd513e9fc4ececa3ce28cf';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}