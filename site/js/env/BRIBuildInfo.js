'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-22 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2003';
    this._commitGIT = '0f71e88430b3051cf628f958417b53c48a42d1b4';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}