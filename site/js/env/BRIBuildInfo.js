'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-17 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1251';
    this._commitGIT = '89b47f0c542e9588c3ce7c56d28b1f4784ae0796';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}