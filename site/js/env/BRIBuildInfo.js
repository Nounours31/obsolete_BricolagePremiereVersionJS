'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-03 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1685';
    this._commitGIT = '93625d2cd41935f125989a7eabdfdc606c452441';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}