'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-07 12:00:11';
    this._versionBuild = 'jenkins-Bricolage-1576';
    this._commitGIT = '5df791bf89996140dd9ac37c573072f55e98e8e7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}