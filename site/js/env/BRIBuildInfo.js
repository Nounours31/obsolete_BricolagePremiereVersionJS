'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-03 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1684';
    this._commitGIT = 'd605981bde5be3572ea50990796dbed4799d83c2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}