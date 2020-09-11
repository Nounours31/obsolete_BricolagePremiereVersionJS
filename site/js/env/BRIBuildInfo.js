'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-11 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1840';
    this._commitGIT = '30870020132560fe5e5a7617bb816bb7812c5e57';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}