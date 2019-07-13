'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-13 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-138';
    this._commitGIT = '28586d2877e21bac7b621b9d65023ecaf4ddb2f9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}