'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-28 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1296';
    this._commitGIT = '13f7ba05f0d867b42bec33f19adae10de12ab2fb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}