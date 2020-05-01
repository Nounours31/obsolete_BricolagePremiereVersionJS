'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-01 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1308';
    this._commitGIT = 'cd85df3f37e2689121cc63c0bdc57ea76003d34e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}